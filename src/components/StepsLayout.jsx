import React from 'react';
import StepImage from '../images/image.png';

const StepsLayout = () => {
  return (
    <div className='p-2 md:p-4'>
      <h1 className='font-bold my-8 mx-10 md:mx-20 text-3xl relative before:absolute before:-bottom-3 before:left-0 before:w-[155px] before:h-1 before:bg-[#6C74CB] before:-z-10'>
        <span className='relative'>
          Working
        </span>
      </h1>

      <div className='w-full flex justify-center'>
        <div className='max-w-5xl mx-auto w-full grid grid-cols-9'>

          {/* Step 1 */}
          <div className='col-span-4 flex justify-center items-center'>
            <img width={225} height={175} src={StepImage} alt='Step 1' />
          </div>
          <div className='relative col-span-1 flex flex-col items-center'>
            {/* Step number circle */}
            <div className='absolute top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#6C74CB] text-white flex items-center justify-center z-10 border border-black'>1</div>
            {/* Line below the circle */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 border-r-2 border-dotted border-black h-1/2'></div>
          </div>
          <div className='col-span-4 flex justify-center items-center'>
            <div className='rounded-md p-4 max-w-xs'>
              <h1 className='font-medium py-2'>Domain Name</h1>
              <p className='text-[12px] md:text-[16px]'>
               Input Domain Name:
                Enter the domain name you want to analyze into the tool's interface.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className='col-span-4 flex justify-center items-center'>
            <div className='rounded-md p-4 max-w-xs'>
              <h1 className='font-medium py-2'>Domain Name</h1>
              <p className='text-[12px] md:text-[16px]'>
                Generate Report:
- Click on the "Generate Report" button to initiate the analysis.
- The tool will automatically analyze backlinks, extract social media stats, categorize the domain, and capture website screenshots.

              </p>
            </div>
          </div>
          <div className='relative col-span-1 flex flex-col items-center'>
            {/* Line above the circle */}
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-1 border-r-2 border-dotted border-black h-1/2'></div>
            {/* Step number circle */}
            <div className='absolute top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#6C74CB] text-white flex items-center justify-center z-10 border border-black'>2</div>
             {/* Line below the circle */}
             <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 border-r-2 border-dotted border-black h-1/2'></div>
          </div>
          <div className='col-span-4 flex justify-center items-center'>
            <img width={225} height={175} src={StepImage} alt='Step 2' />
          </div>

          {/* Step 3 */}
          <div className='col-span-4 flex justify-center items-center'>
            <img width={225} height={175} src={StepImage} alt='Step 3' />
          </div>
          <div className='relative col-span-1 flex flex-col items-center'>
            {/* Line above the circle */}
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-1 border-r-2 border-dotted border-black h-1/2'></div>
            {/* Step number circle */}
            <div className='absolute top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#6C74CB] text-white flex items-center justify-center z-10 border border-black'>3</div>
          </div>
          <div className='col-span-4 flex justify-center items-center'>
            <div className='rounded-md p-4 max-w-xs'>
              <h1 className='font-medium py-2'>Domain Name</h1>
              <p className='text-[12px] md:text-[16px]'>
                Download PDF:
Once the analysis is complete, download the generated PDF report that includes detailed insights on backlinks, social media presence, domain categories, traffic, revenue, keywords, Open Graph data, and live website screenshots.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StepsLayout;
