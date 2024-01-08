import Login from "../Login/login";
// import Tongquan from "../TongQuan/tongquan";

import DashBoard from "../TongQuan/trang/Dashboard/Dashboard";
import Customer from "../TongQuan/trang/Customer/Customer";
import Products from "../TongQuan/trang/Products/Products";
import Order from "../TongQuan/trang/Order/Order";
import Analytics from "../TongQuan/trang/Analytics/Analytics";
import Profile from "../Profile/Profile";
const publicRoutes = [
  { path: "/Login", component: Login },
  { path: "/", component: DashBoard },
  { path: "/Customer", component: Customer },
  { path: "/Products", component: Products },
  { path: "/Order", component: Order },
  { path: "/Analytics", component: Analytics },
  { path: "/Profile", component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
