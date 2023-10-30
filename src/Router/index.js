import Login from "../Login/login";
// import Tongquan from "../TongQuan/tongquan";

import DashBoard from "../TongQuan/trang/Dashboard/Dashboard";
import Customer from "../TongQuan/trang/Customer/Customer";
import Products from "../TongQuan/trang/Products/Products";
import Order from "../TongQuan/trang/Order/Order";
import Analytics from "../TongQuan/trang/Analytics/Analytics";
const publicRoutes = [
  // { path: "/", component: Tongquan },
  { path: "/Login", component: Login },
  { path: "/DashBoard", component: DashBoard },
  { path: "/Customer", component: Customer },
  { path: "/Products", component: Products },
  { path: "/Order", component: Order },
  { path: "/Analytics", component: Analytics },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
