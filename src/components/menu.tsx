import Link from "next/link";
import { ROUTES } from "@/constants/routes";

interface MenuProps {
  op1: string;
  op2: string;
  op3: string;
  op4: string;
}

export const Menu: React.FC<MenuProps> = ({ op1, op2, op3, op4 }) => {
  return (
    <header>
      <nav className="text-large bg-black text-white font-robFont font-thin">
        <Link href={ROUTES.home}>{op1}</Link>
        <Link className="font-black" href={ROUTES.maths}>
          {op2}
        </Link>
        <Link href={ROUTES.generalFunction}>{op3}</Link>
        <Link className="font-black" href={ROUTES.hookPage}>
          {op4}
        </Link>
      </nav>
    </header>
  );
};
