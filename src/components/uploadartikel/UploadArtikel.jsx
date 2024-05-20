import axios from "axios";
import React, { useReducer } from "react";
import { removeFileExtensionFromUrl } from "../../utils/parseImgName";

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
  const { image, judul, isi, loading, penulis, headline, errorMessage } = state;
  const token = localStorage.getItem("token");

  const controller = new AbortController();
  const signal = controller.signal;

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

      const response = await axios.post("http://localhost:3000/artikel", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        signal,
      });

      alert("Artikel Created");
      dispatch({ type: "SET_LOADING", payload: false });
      return response;
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
        signal,
      }
    );
    const imageUrl = res.data.imageUrl;
    const imageName = removeFileExtensionFromUrl(imageUrl);
    if (!res.data.imageUrl) {
      dispatch({ type: "SET_LOADING", payload: false });
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

      const response = await axios.post("http://localhost:3000/artikel", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        signal,
      });

      alert("Artikel Created");
      return response;
    } catch (error) {
      if (error.response && error.response.status === 403) {
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: error.response.data.message,
        });
      }
      await axios.delete(`http://localhost:3000/image/delete/${imageName}`);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h2 className="text-3xl text-white">Upload Article</h2>
      <p className="text-red-600 font-semibold text-sm">{errorMessage}</p>
      <div>
        <form onSubmit={handleUpload} action="">
          <label className="block" htmlFor="fileImage">
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
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />

          <label className="block mt-4" htmlFor="headline">
            headline article
          </label>
          <input
            id="headline"
            name="headline"
            type="text"
            value={headline}
            disabled={loading}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) =>
              dispatch({ type: "SET_HEADLINE", payload: e.target.value })
            }
          />
          <label className="block mt-4" htmlFor="judul">
            judul
          </label>
          <input
            id="judul"
            name="judul"
            type="text"
            value={judul}
            disabled={loading}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) =>
              dispatch({ type: "SET_JUDUL", payload: e.target.value })
            }
          />
          <label className="block mt-4" htmlFor="isi">
            Content
          </label>
          <textarea
            id="isi"
            value={isi}
            name="isi"
            onChange={(e) =>
              dispatch({ type: "SET_ISI", payload: e.target.value })
            }
            className="textarea textarea-primary w-full"
            placeholder="Content"
            disabled={loading}
          ></textarea>
          <label className="block mt-4" htmlFor="penulis">
            Penulis
          </label>
          <input
            id="penulis"
            name="penulis"
            type="text"
            value={penulis}
            disabled={loading}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) =>
              dispatch({ type: "SET_PENULIS", payload: e.target.value })
            }
          />
          <button disabled={loading} className="btn mt-4 btn-primary">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
