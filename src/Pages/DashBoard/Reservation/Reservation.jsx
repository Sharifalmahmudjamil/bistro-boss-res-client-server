import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here (e.g., send to API, etc.)
    if (data) {
      const reserve = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        people: data.people,
        date: data.date,
        time: data.time,
        reservationType: data?.reservationType,
      };
      const reservation = axiosPublic.post("/reserve", reserve);
      console.log(reservation);
      if (reservation) {
        // show success popup

        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `your reservation is Successfully.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <section>
        <SectionTitle
          heading="Reservation"
          subHeading="Reserve Now, Savor Later"
        ></SectionTitle>
      </section>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                minLength: { value: 11, message: "Must be at least 11 digits" },
                maxLength: { value: 15, message: "Cannot exceed 15 digits" },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          {/* Time */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Time</label>
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>

          {/* Number of People */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Number of People
            </label>
            <input
              type="number"
              {...register("people", {
                required: "Please enter the number of people",
                min: { value: 1, message: "At least 1 person" },
                max: { value: 20, message: "Cannot exceed 20 people" },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Number of People"
            />
            {errors.people && (
              <p className="text-red-500 text-sm mt-1">
                {errors.people.message}
              </p>
            )}
          </div>

          {/* Reservation Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Reservation Type
            </label>
            <select
              {...register("reservationType", {
                required: "Reservation type is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="Dinner">Dinner</option>
              <option value="VIP/Mezzanine">VIP/Mezzanine</option>
              <option value="Birthday/Anniversary">Birthday/Anniversary</option>
              <option value="NightLife">NightLife</option>
              <option value="Weeding">Weeding</option>
              <option value="Corporate">Corporate</option>
              <option value="Holiday">Holiday</option>
              <option value="Others">Others</option>
            </select>
            {errors.reservationType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.reservationType.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-slate-600 transition-colors"
            >
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
