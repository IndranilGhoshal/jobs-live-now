"use client";

import React, {
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

export default function Page() {

  const [marqueeText, setMarqueeText] =useState("");
  const [marqueeId, setMarqueeId] =useState("");

  const [loading, setLoading] =
    useState(false);

  // ================= FETCH =================

  const fetchMarquee = async () => {

    try {

      const res = await fetch("/api/marquee",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            details: true
          }),
        });

      const data = await res.json();

      if (data.success) {
        setMarqueeText(data?.data?.marquee || "");
        setMarqueeId(data?.data?._id || "")
      }else{
        setMarqueeText("");
        setMarqueeId("")
      }

    } catch (error) {

      console.log(error);

    }

  };

  // ================= SAVE =================

  const saveMarquee = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "/api/marquee",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            marquee: marqueeText,
            add: true
          }),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        fetchMarquee();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ================= SAVE =================

  const editMarquee = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "/api/marquee",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            marquee: marqueeText,
            id: marqueeId,
            edit: true
          }),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        fetchMarquee();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ================= USE EFFECT =================

  useEffect(() => {
    fetchMarquee();
  }, []);

  return (

    <>

      <div className="marquee-form-container">

        <h2>
          📄 Highlight Marquee
        </h2>

        <input

          placeholder="Enter marquee text..."

          value={marqueeText}

          onChange={(e) =>
            setMarqueeText(
              e.target.value
            )
          }

        />

        {
         marqueeId == '' || marqueeText == '' ?
            <button

              onClick={saveMarquee}

              disabled={loading}

            >

              {
                loading
                  ? "Saving..."
                  : "Save"
              }

            </button>
            :
            <button

              onClick={editMarquee}

              disabled={loading}

            >

              {
                loading
                  ? "Saving..."
                  : "Edit"
              }

            </button>
        }

      </div>

    </>

  );

}