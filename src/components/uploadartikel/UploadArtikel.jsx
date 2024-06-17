import axios from "axios";
import React, { useReducer } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UseCreateArticle from "../../hook/artikel/useCreateArtikel";
import { removeFileExtensionFromUrl } from "../../redux/utils/parseImgName";
import NavbarAdmin from "../navbar/navbaradmin";

const initialState = {
  image: null,
  judul: "",
  isi: "",
  loading: false,
  penulis: "",
  headline: "",
  errorMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_JUDUL":
      return { ...state, judul: action.payload };
    case "SET_ISI":
      return { ...state, isi: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_PENULIS":
      return { ...state, penulis: action.payload };
    case "SET_HEADLINE":
      return { ...state, headline: action.payload };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default function UploadArtikel() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { createArtikel } = UseCreateArticle();
  const { image, judul, isi, loading, penulis, headline, errorMessage } = state;
  const token = localStorage.getItem("token");

  async function handleUpload(e) {
    dispatch({ type: "SET_LOADING", payload: true });
    e.preventDefault();

    if (!image) {
      const data = {
        judul,
        isi,
        penulis,
        headline_isi: headline,
      };
      createArtikel(data);
      toast.success("Artikel berhasil diupload!");
      dispatch({ type: "SET_LOADING", payload: false });
      return null;
    }

    const formData = new FormData();
    formData.append("file", image);
    const res = await axios.post(
      "http://localhost:3000/image/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const imageUrl = res.data.imageUrl;
    const imageName = removeFileExtensionFromUrl(imageUrl);

    if (!res.data.imageUrl) {
      dispatch({ type: "SET_LOADING", payload: false });
      toast.error("Gagal mengunggah gambar!");
      return;
    }

    try {
      const data = {
        judul,
        isi,
        penulis,
        headline_isi: headline,
        gambar: imageUrl,
      };
      createArtikel(data);
      toast.success("Artikel berhasil diupload!");
      dispatch({ type: "SET_LOADING", payload: false });
      return null;
    } catch (error) {
      if (error.response && error.response.status === 403) {
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
      }
      await axios.delete(`http://localhost:3000/image/delete/${imageName}`);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarAdmin />
      <ToastContainer />
      <div className="flex-grow flex flex-col items-center justify-center overflow-x-auto mt-2">
        <p className="text-red-600 font-semibold text-sm">{errorMessage}</p>
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-lg font-medium" htmlFor="fileImage">
                Image
              </label>
              <input
                id="fileImage"
                name="fileImage"
                type="file"
                disabled={loading}
                onChange={(e) =>
                  dispatch({ type: "SET_IMAGE", payload: e.target.files[0] })
                }
                className="file-input file-input-bordered file-input-primary w-full h-8"
              />
            </div>

            <div>
              <label className="block text-lg font-medium" htmlFor="headline">
                Highlight Artikel
              </label>
              <input
                id="headline"
                name="headline"
                type="text"
                value={headline}
                disabled={loading}
                placeholder="Type here"
                className="input input-bordered input-primary w-full h-8"
                onChange={(e) =>
                  dispatch({ type: "SET_HEADLINE", payload: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-lg font-medium" htmlFor="judul">
                Judul
              </label>
              <input
                id="judul"
                name="judul"
                type="text"
                value={judul}
                disabled={loading}
                placeholder="Judul Artikel"
                className="input input-bordered input-primary w-full h-8"
                onChange={(e) =>
                  dispatch({ type: "SET_JUDUL", payload: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-lg font-medium" htmlFor="isi">
                Content
              </label>
              <textarea
                id="isi"
                value={isi}
                name="isi"
                onChange={(e) =>
                  dispatch({ type: "SET_ISI", payload: e.target.value })
                }
                className="textarea textarea-primary w-full h-80"
                placeholder="Content"
                disabled={loading}
              ></textarea>
            </div>

            <div>
              <label className="block text-lg font-medium" htmlFor="penulis">
                Penulis
              </label>
              <input
                id="penulis"
                name="penulis"
                type="text"
                value={penulis}
                disabled={loading}
                placeholder="Nama Penulis"
                className="input input-bordered input-primary w-full h-8"
                onChange={(e) =>
                  dispatch({ type: "SET_PENULIS", payload: e.target.value })
                }
              />
            </div>

            <button
              disabled={loading}
              className="btn mt-4 btn-primary w-full py-2"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
