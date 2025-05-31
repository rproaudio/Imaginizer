function Input() {
  return (
    <div
      className="bg-neutral-100 min-w-60 relative rounded shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-4 py-3 relative w-full">
          <div className="basis-0 css-3zf074 font-['Segoe_UI:Light',_sans-serif] font-light grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[16px] text-left">
            <p className="block leading-[24px]">Your Character Name</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#9f9fa9] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function ImaginizerInput() {
  return (
    <div className="relative shrink-0 w-[635px]" data-name="Imaginizer/input">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-[635px]">
        <div
          className="css-3zf074 font-['Segoe_UI:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#717182] text-[16px] text-left"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[19.5px]">Character Name</p>
        </div>
        <Input />
      </div>
    </div>
  );
}

export default function ImaginizerInput1() {
  return (
    <div className="relative size-full" data-name="Imaginizer/input">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
        <ImaginizerInput />
      </div>
    </div>
  );
}