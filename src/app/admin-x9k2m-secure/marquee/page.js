"use client";

import Editor from "@/app/_component/Editor";
import React, {
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

export default function Page() {

  const [marqueeText, setMarqueeText] = useState("");
  const [marqueeId, setMarqueeId] = useState("");
  const [errors, setErrors] = useState("");

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
      } else {
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

  const validateSingleField = (value) => {
    if (!value || value.trim() === "") {
      return `Marquee text is required`;
    }else{
      return "";
    }
  };

  const handleChange = (value) => {
    setMarqueeText(value);
    // // 🔥 REAL-TIME VALIDATION
    const errorMsg = validateSingleField(value);
    setErrors(errorMsg);
  };

  return (

    <div className="marquee-page">

      <div className="marquee-header">
        <div className="title-wrapper">
          <div className="title-icon">
            <i className="fa-solid fa-bullhorn"></i>
          </div>

          <div>
            <h2>Highlight Marquee</h2>
            <p>Manage all important announcements and updates</p>
          </div>
        </div>
      </div>

      <div className="marquee-container">

        <div>
          <Editor
            value={marqueeText}
            onChange={(data) => handleChange(data)}
            error={errors}
            editortype="normal"
          />

          { errors && <div className="error-text">{errors}</div>}
        </div>

        

        {
          marqueeId == '' || marqueeText == '' ?
            <button
              onClick={saveMarquee}
              disabled={marqueeText == ""}
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
              disabled={marqueeText == ""}
            >
              {
                loading
                  ? "Saving..."
                  : "Edit"
              }
            </button>
        }

      </div>

    </div>

  );

}