import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
  Grid,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";

import dataPembelajaran from "../data/dataPembelajaran.json";
import Layout from "../components/Layout";

function Pembelajaran() {
  const { subject } = useParams();
  const [materi, setMateri] = useState(null);

  useEffect(() => {
    setMateri(dataPembelajaran[subject]);
  }, [subject]);

  if (!materi) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <section className="section-pembelajaran">
        <div className="materi-pembelajaran-wrapper bg-slate-900">
          <div className="container mx-auto p-12">
            <h1 className="text-4xl font-bold text-center">
              Materi Pembelajaran: {subject}
            </h1>
            <div className="h-full w-full mt-12">
              <Swiper
                modules={[Autoplay, Navigation, Pagination, FreeMode, Thumbs]}
                slidesPerView={1}
                loop={false}
                hashNavigation={{
                  watchState: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                spaceBetween={16}
                direction={"horizontal"}
                onSwiper={(swiper) => swiper}
                className="swiper-perangkat"
              >
                {materi.slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="pembelajran-slides-card flex flex-col gap-6 h-[74vh] p-24 flex-grow">
                      <h1 className="text-4xl text-slate-100 mb-6">
                        {slide.title}
                      </h1>
                      {slide.content && slide.content.length > 0 ? (
                        slide.content.map((item, idx) => (
                          <h3 key={idx} className="text-xl text-slate-100">
                            {item}
                          </h3>
                        ))
                      ) : (
                        <p className="text-xl text-slate-100">
                          Materi belum tersedia.
                        </p>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Pembelajaran;
