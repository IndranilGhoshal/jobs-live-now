"use client";

import { useApi } from '@/app/utils/api';
import { formatNumber } from '@/app/utils/common';
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
  const { postData, getData } = useApi();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    try {
      const data = await postData(`/api/admin/dashboard`, {});
      if (data.success) {
        setDatas(data?.data || []);
      } else {
        setDatas([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="stats">
        {
          datas.map((item, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon">{item.icon}</div>
              <h4>{item.name}</h4>
              <p>{formatNumber(item.value)}</p>
            </div>
          ))
        }
      </div>

    </>
  )
}
