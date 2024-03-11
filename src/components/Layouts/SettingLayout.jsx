import { useRef } from "react";

const SettingLayout = () => {
  const fileInputRef = useRef(null);
  // Handler untuk tombol Pilih Gambar
  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

  // Handler ketika gambar dipilih
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      document.getElementById("preview-image").src = imageUrl;
    }
  };
  return (
    <div className="container mx-auto mt-3">
      <div className="card w-100 bg-slate-100 rounded-none">
        <div className="card-title p-5">
          <p className="uppercase">Settings</p>
        </div>
        <hr className="bg-slate-500" />
        <div className="card-body">
          <div className="flex flex-col gap-5">
            <div className="w-">
              <img
                id="preview-image"
                src=""
                alt=""
                className="w-24 h-24 rounded-full"
              />
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden file-input w-full max-w-xs"
              onChange={handleImageChange}
              accept="image/*"
            />
            <button
              onClick={handleChooseImage}
              className="px-2 py-3 bg-rose-500 w-1/6 text-slate-100 rounded-sm"
            >
              Pilih Gambar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingLayout;
