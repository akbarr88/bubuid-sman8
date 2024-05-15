import axios from "axios";
import React, { useState } from "react";

export default function UploadArtikel() {
  const [image, setImage] = useState(null);
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [loading, setLoading] = useState(false);
  const [penulis, setPenulis] = useState("");
  const [headline, setHeadline] = useState("");
  const token = localStorage.getItem("token");
  async function handleUpload(e) {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    const res = await axios.post("http://localhost:3000/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!res.data.imageUrl) {
      setLoading(false);
      return;
    }

    const data = {
      judul,
      isi,
      penulis,
      headline,
      gambar: res.data.imageUrl,
    };

    const response = await axios.post("http://localhost:3000/artikel", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    setLoading(false);
    alert("Artikel Created");
    return response;
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h2 className="text-3xl text-white">Upload Article</h2>
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
            onChange={(e) => setImage(e.target.files[0])}
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
            onChange={(e) => setHeadline(e.target.value)}
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
            onChange={(e) => setJudul(e.target.value)}
          />
          <label className="block mt-4" htmlFor="isi">
            Content
          </label>
          <textarea
            id="isi"
            value={isi}
            name="isi"
            onChange={(e) => setIsi(e.target.value)}
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
            onChange={(e) => setPenulis(e.target.value)}
          />
          <button disabled={loading} className="btn mt-4 btn-primary">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
