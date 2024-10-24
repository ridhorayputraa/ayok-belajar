import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import pembelajaranData from "../data/dataPembelajaran.json";
import { title } from "framer-motion/client";

function Jadwal() {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    // Memformat data dari pembelajaran.json
    const generateSchedule = () => {
      // Pastikan pembelajaranData terdefinisi dan merupakan objek
      if (pembelajaranData && typeof pembelajaranData === "object") {
        const subjects = Object.keys(pembelajaranData);
        const schedule = [];

        subjects.forEach((key, index) => {
          const subject = pembelajaranData[key];

          // Cek apakah subject memiliki 'schedule' dan itu adalah array
          if (subject.schedule && Array.isArray(subject.schedule)) {
            subject.schedule.forEach((sched, idx) => {
              schedule.push({
                id: index + 1,
                title: subject.title,
                subject: subject.subjectUri,
                day: sched.day,
                date: sched.date, // Format tanggal
                time: sched.time,
                url: subject.url,
              });
            });
          }
        });

        setScheduleData(schedule);
      } else {
        console.error("pembelajaranData is undefined or not an object");
      }
    };

    generateSchedule();
    console.log(scheduleData);
  }, []);

  console.log(scheduleData);

  return (
    <Layout>
      <section className="section-jadwal">
        <div className="container mx-auto">
          <div className="subject-title text-center">
            <h1 className="text-4xl font-bold"> Jadwal Pembelajaran</h1>
          </div>
          <div className="relative mt-12 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Hari
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Waktu
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{item.id}</td>
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.title}
                    </th>
                    <td className="px-6 py-4">{item.day}</td>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4">{item.time}</td>
                    <td className="px-6 py-4">
                      <a
                        href={`/pembelajaran/${item.subject}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Go to Subject
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Jadwal;
