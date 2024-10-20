import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //     fetch('menu.json')
  //         .then(res => res.json())
  //         .then(data => {
  //             const popularItems = data.filter(item => item.category === 'popular');
  //             setMenu(popularItems)
  //         })
  // }, [])
  return (
    <section>
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to="order/salad">
        <button className="btn btn-outline border-0 border-b-4 mt-4 ">
          View Full Menu
        </button>
      </Link>
    </section>
  );
};

export default PopularMenu;
