import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

const ManageReservation = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reserve = [], refetch } = useQuery({
    queryKey: ["reserve"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reserve");
      return res.data;
    },
  });

  const handleMakeAdmin = (reserve) => {
    axiosSecure.patch(`/reserve/confirm/${reserve._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${reserve.name} your reserve is confirm!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (reserves) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reserve/${reserves._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <section>
        <SectionTitle
          heading="Manage Reservation"
          subHeading="Reserve Now, Savor Later"
        ></SectionTitle>
      </section>

      <h1>Total Reservation: {reserve.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>People</th>
              <th>ReservationType</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reserve.map((reserves, index) => (
              <tr key={reserves._id}>
                <th>{index + 1}</th>
                <td>{reserves.name}</td>
                <td>{reserves.email}</td>
                <td>{reserves.phone}</td>
                <td>{reserves.date}</td>
                <td>{reserves.time}</td>
                <td>{reserves.people}</td>
                <td>{reserves.reservationType}</td>
                <td>
                  {reserves.role === "confirm" ? (
                    "Reservation Confirm"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(reserves)}
                      className="btn btn-lg bg-orange-500"
                    >
                      <TbBrandBooking
                        className="text-white 
                                        text-2xl"
                      ></TbBrandBooking>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(reserves)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageReservation;
