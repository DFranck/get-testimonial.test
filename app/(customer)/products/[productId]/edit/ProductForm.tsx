"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { createProductAction } from "./product.action";
import { GRADIEN_CONTENT, ProductType, productSchema } from "./product.schema";

export type ProductFormProps = {
  defaultValues?: ProductType;
};

const ProductForm = (props: ProductFormProps) => {
  const form = useZodForm({
    schema: productSchema,
    defaultValues: props.defaultValues,
  });
  const isCreate = !Boolean(props.defaultValues);
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (values: ProductType) => {
      const { data, serverError } = await createProductAction(values);
      if (serverError || !data) {
        toast.error(serverError);
        return;
      }

      toast.success("Product created");
      router.push(`/products/${data.id}`);
    },
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate
            ? "Create product"
            : `Edit product ${props.defaultValues?.name}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          form={form}
          onSubmit={async (Value) => {
            console.log(Value);

            await mutation.mutateAsync(Value);
          }}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="TUTUTATAs" {...field} />
                </FormControl>
                <FormDescription>
                  The name of the product to review
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="backgroundColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>backgroundColor</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {GRADIEN_CONTENT.map((gradients) => (
                        <SelectItem
                          key={gradients.name}
                          value={gradients.gradient}
                        >
                          <span
                            className={cn(gradients.gradient, "w-full, h-8")}
                          >
                            {gradients.name}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  The review page background color
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Submit</Button>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
