import { useEffect, useState } from "react";

import API from "../services/api";


function Admin() {

  const [courses, setCourses] = useState([]);

  const [form, setForm] = useState({
    course: "",
    duration: "",
    fees: "",
    campus: ""
  });


  const fetchCourses = async () => {

    try {

      const response = await API.get("/admin/courses");

      setCourses(response.data);

    } catch (error) {

      console.log(error);

    }
  };


  useEffect(() => {

    const loadCourses = async () => {

        await fetchCourses();

    };

    loadCourses();

    }, []);


  const addCourse = async () => {

    try {

      await API.post("/admin/courses", form);

      await fetchCourses();

      setForm({
        course: "",
        duration: "",
        fees: "",
        campus: ""
      });

    } catch (error) {

      console.log(error);

    }
  };



  return (

    <div className="min-h-screen scroll-auto bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">

          Admin Dashboard

        </h1>


        {/* Add Course */}
        <div className="bg-white p-6 rounded-2xl shadow mb-8">

          <h2 className="text-xl font-semibold mb-4">

            Add Course

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Course"
              value={form.course}
              onChange={(e) =>
                setForm({
                  ...form,
                  course: e.target.value
                })
              }
              className="p-3 border rounded-xl"
            />

            <input
              type="text"
              placeholder="Duration"
              value={form.duration}
              onChange={(e) =>
                setForm({
                  ...form,
                  duration: e.target.value
                })
              }
              className="p-3 border rounded-xl"
            />

            <input
              type="text"
              placeholder="Fees"
              value={form.fees}
              onChange={(e) =>
                setForm({
                  ...form,
                  fees: e.target.value
                })
              }
              className="p-3 border rounded-xl"
            />

            <input
              type="text"
              placeholder="Campus"
              value={form.campus}
              onChange={(e) =>
                setForm({
                  ...form,
                  campus: e.target.value
                })
              }
              className="p-3 border rounded-xl"
            />

          </div>

          <button
            onClick={addCourse}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl"
          >

            Add Course

          </button>

        </div>


        {/* Courses Table */}
        <div className="bg-white rounded-2xl shadow p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-semibold">

              Courses

            </h2>

          </div>


          <div className="overflow-auto max-h-[70vh] rounded-xl border">

            <table className="w-full">

              <thead className="sticky top-0 bg-white z-10">

                <tr className="border-b odd:bg-gray-50 hover:bg-gray-100 transition">

                  <th className="text-left p-3">Course</th>
                  <th className="text-left p-3">Duration</th>
                  <th className="text-left p-3">Fees</th>
                  <th className="text-left p-3">Campus</th>

                </tr>

              </thead>

              <tbody>

                {courses.map((course) => (

                  <tr
                    key={course.id}
                    className="border-b"
                  >

                    <td className="p-3">{course.course}</td>
                    <td className="p-3">{course.duration}</td>
                    <td className="p-3">{course.fees}</td>
                    <td className="p-3">{course.campus}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Admin;