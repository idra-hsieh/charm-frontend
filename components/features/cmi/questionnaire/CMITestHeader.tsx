import ProgressBar from "./ProgressBar"


function CMITestHeader() {
  return (
      <div className="w-full h-[200px] bg-marble rounded-b-3xl text-foreground">
          <div className='flex flex-col items-center justify-center text-center h-full space-y-2 mt-1'>
              <h1 className='font-bold text-foreground/90 text-xl'>Free Money Identity Test</h1>
              <p className='text-xs text-foreground/65'><span className='font-semibold'>Charm Money Indicator®</span> helps you understand your<br />relationship with money and create a plan to improve it.</p>
              <div className="mt-3 w-full flex justify-center">
                  <ProgressBar current={2} total={3}/>
              </div>
          </div>
     </div>
  )
}

export default CMITestHeader
