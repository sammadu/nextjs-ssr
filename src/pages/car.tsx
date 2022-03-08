import { Stack } from "@mui/material";
import { NextPage } from "next";
import Image from 'next/image';

const Car: NextPage = () => {
  return (
    <Stack direction="row">
      <Image src="/images/ethereum.png" alt="ethereum" width={42} height={42} />
      <Image src="/images/bsc.png" alt="gsc" width={42} height={42} />
      <Image src="/images/polygon.png" alt="polygon" width={42} height={42} />
      <Image src="/images/ronin.png" alt="ronin" width={42} height={42} />
    </Stack>
  );
};

export default Car;
