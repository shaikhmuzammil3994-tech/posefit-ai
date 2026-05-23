"use client";

import { useState, useEffect } from "react";
import AutoUpload from "@/components/AutoUpload";

export default function Page() {
  const [userImage, setUserImage] = useState("");
  const [fabricImage, setFabricImage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userImage && fabricImage) {
      generateOutfit();
    }
  }, [userImage, fabricImage]);

  const generateOutfit = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userImage,
          fabricImage,
        }),
      });

      const data = await res.json();

      const image = Array.isArray(data.result)
        ? data.result[0]
        : data.result;

      setResult(image);
    } catch (err) {
      console.error(err);
      alert("Failed to generate outfit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      {/* Navbar */}
      <nav className="border-b bg-white px-8 py-5 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-tight">
          PoseFit AI
        </h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide text-gray-700">
          <button>Men</button>
          <button>Women</button>
          <button>New In</button>
          <button>Virtual Try-On</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase text-sm tracking-[0.25em] text-gray-500 mb-4">
              AI Fashion Experience
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Try outfits instantly with AI.
            </h2>

            <p className="text-lg text-gray-600 max-w-xl">
              Upload your photo and fabric. PoseFit creates a
              realistic virtual outfit preview instantly.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-6 border">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  User Photo
                </h3>
                <AutoUpload onUploaded={setUserImage} />
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  Fabric Image
                </h3>
                <AutoUpload onUploaded={setFabricImage} />
              </div>
            </div>

            <div className="mt-8 border rounded-3xl overflow-hidden bg-[#fafafa] min-h-[420px] flex items-center justify-center">
              {loading ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-14 w-14 border-4 border-gray-300 border-t-black mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">
                    Generating Outfit...
                  </p>
                </div>
              ) : result ? (
                <img
                  src={result}
                  alt="Generated Outfit"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-gray-500 px-8">
                  <p className="text-2xl font-medium mb-2">
                    👔 Generated Outfit
                  </p>
                  <p>No output yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
