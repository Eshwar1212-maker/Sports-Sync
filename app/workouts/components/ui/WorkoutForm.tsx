import Button from "@/app/components/Button";


const Form = () => {
    return (
      <form className="text-md">
        <label className="pl-3">Body Part</label>
        <input
          className="w-full p-1 m-2 border-[1px] border-s border-black"
          placeholder=""
        />
        <label className="pl-3">Exercise</label>
        <input
          className="w-full p-1 m-2 border-[1px] border-s border-black"
          placeholder=""
        />
        <label className="pl-3">Body Part</label>
        <input
          className="w-full p-1 m-2 border-[1px] border-s border-black"
          placeholder=""
        />
        <label className="pl-3">Reps</label>
        <input
          className="w-full p-1 m-2 border-[1px] border-s border-black"
          placeholder=""
        />
        <label className="pl-3">Sets</label>
        <input
          className="w-full p-1 m-2 border-[1px] border-s border-black"
          placeholder=""
        />
        <div className="flex justify-end">
          <Button>Add</Button>
        </div>
      </form>
    );
  };
  

  export default Form