import React from "react";
import image from "../../images/hero.png";
import Categories from "./Categories";
import Teachers from "./Teachers";
import Courses from "./Courses";
function Home() {
  return (
    <>
      <div className="">
        <div className=" bg-base-200 ps-0 ms-0 py-0">
          <div className="hero-content flex-col lg:flex-row ps-0 ms-0 py-0">
            <img
              src={image}
              className="w-7/12 hidden lg:block  " />
            <div className="w-5/12 h-5/6 flex items-center justify-center flex-col ">
              <h1 className="text-5xl font-bold text-center leading-snug ">تعلم مع خبراء في اي وقت من اي مكان</h1>
              <p className="py-6 text-right">
                مهمتنا هي مساعدة الأشخاص في العثور على أفضل دورة تدريبية عبر الإنترنت والتعلم مع الخبراء في أي وقت وفي أي مكان.
              </p>
              <button className="btn btn-primary w-1/3">تسجيل حساب </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4  bg-base-100">

        <Categories />
      </div>
      <div className="py-4 ">
        <Teachers />
      </div>

      <div className="py-4">
        <Courses />
      </div>



    </>);
}


export default Home;
