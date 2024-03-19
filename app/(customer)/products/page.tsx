import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { currentUser } from "@/features/auth/auth.action";
import db from "@/lib/db";
import Link from "next/link";

const product = async () => {
  const user = await currentUser();
  const products = await db?.product?.findMany({
    where: {
      userId: user?.id,
    },
  });
  return (
    <div>
      product
      <Card className="p-4">
        {products?.length ? (
          <Table>
            <TableHeader>
              <TableHead>Name</TableHead>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Button asChild className="w-full  p-8">
            <Link href="/products/new">Créate product!</Link>
          </Button>
        )}
      </Card>
    </div>
  );
};

export default product;
