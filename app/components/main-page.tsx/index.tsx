import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";

const MainPage = () => {
    type Inputs = {
        sender: string;
        subject: string;
        body: string;
    };
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) =>
        (window.location.href = `mailto:address@dmail.com?body=${data.body + "\n\n" + data.sender}&subject=${
            data.subject
        }`);

    return (
        <div className="flex flex-col gap-2.5">
            <h1>Drawing app with embedded note taking capabilities.</h1>
            <p>
                Source code can be found at{" "}
                <Link href="https://github.com/lepropst/new-thought-accumulator">new-thought-accumulator repo</Link>
                <br />
                If access is needed please contact me:
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                method="GET"
                className="m-0 flex items-end gap-2.5 rounded-md border-2 p-2 shadow-sm [&>*]:border [&>*]:border-gray-200 [&>*]:px-0 [&>*]:py-2"
            >
                <input {...register("sender", { required: true })} type="text" />
                <input {...register("subject", { required: true })} type="text" />
                <textarea {...register("body", { required: true })} />
                <Button role="submit" type="submit" variant="ghost">
                    send
                </Button>
            </form>
        </div>
    );
};
export default MainPage;
