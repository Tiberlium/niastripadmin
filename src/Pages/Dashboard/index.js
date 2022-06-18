import React from "react";
import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { BsChevronRight } from "react-icons/bs";

import { db } from "../../Firebase";

import { ResponsiveBar } from "@nivo/bar";
import Card from "../../Component/Card";

const data = [
  {
    day: "Monday",
    degress: 59,
  },
  {
    day: "Tuesday",
    degress: 61,
  },
  {
    day: "Wednesday",
    degress: 55,
  },
  {
    day: "Thursday",
    degress: 78,
  },
  {
    day: "Friday",
    degress: 71,
  },
  {
    day: "Saturday",
    degress: 56,
  },
  {
    day: "Sunday",
    degress: 67,
  },
];

const Bar = () => (
  <Box h={"96"} w={"full"}>
    <ResponsiveBar
      data={data}
      keys={["degress"]}
      indexBy="day"
      margin={{ top: 50, right: 150, bottom: 100, left: 60 }}
      padding={0.7}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "degrees",
        legendPosition: "middle",
        legendOffset: -40,
      }}
    />
  </Box>
);

const Navbread = () => (
  <Breadcrumb spacing="8px" separator={<BsChevronRight color="gray.500" />}>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to="#" isCurrentPage>
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

export default function Dashboard() {
  const [transact, settransact] = React.useState([]);
  const [user, setuser] = React.useState([]);
  const isMounted = React.useRef();
  let totalTransaksi = 0;
  let pendapatan = 0;

  function formatRupiah(uang) {
    return new Intl.NumberFormat("ID-id", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(uang);
  }

  function Percentage(num, per) {
    return (num / 100) * per;
  }

  async function getTransaksi() {
    let x = [];
    const docRef = await db.collection("Transaksi").get();

    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    if (isMounted.current) return settransact(x);
  }

  async function getuser() {
    let y = [];

    const docRef = await db.collection("Users").get();

    docRef.docs.map((doc) => {
      y.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    if (isMounted.current) return setuser(y);
  }

  React.useEffect(() => {
    isMounted.current = true;
    getuser();
    return () => (isMounted.current = false);
  }, []);

  React.useEffect(() => {
    isMounted.current = true;
    getTransaksi();
    return () => (isMounted.current = false);
  }, []);

  const totalTransact = transact.map((doc) => {
    return (totalTransaksi += Number(doc["data"]["amount"]));
  });

  //fungsi ini berguna untuk mengkalkulasi keuntungan 10% dari setiap transaksi dan menjumlahkan nya semua

  const withdrawal = transact.map((doc) => {
    return (pendapatan += Percentage(Number(doc["data"]["amount"]), 10));
  });

  return (
    <Box>
      <Navbread />
      <Text fontSize="5xl" mb="12">
        Dashboard anda
      </Text>
      <Card
        pengguna={user.length}
        transaksi={transact.length}
        total={formatRupiah(totalTransaksi)}
        pendapatan={formatRupiah(pendapatan)}
      />
      <Text fontSize="2xl" color="black" mt={10}>
        Aktivitas Pengguna
      </Text>
      <Bar />
    </Box>
  );
}
