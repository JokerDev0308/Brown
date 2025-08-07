import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";

export const LandingPage = (): JSX.Element => {
  return (
    <main className="bg-white min-h-screen w-full">
      <section className="w-full max-w-[1440px] mx-auto min-h-screen flex flex-col lg:flex-row">
        {/* Left side with background image */}
        <div className="relative w-full lg:w-[672px] h-[400px] sm:h-[500px] lg:h-[764px] order-1 lg:order-1">
          <div className="absolute w-full h-full bg-[url(/images/lp-bg.png)] bg-cover bg-center">
            <div className="h-full bg-[#193913] opacity-50" />
          </div>

          <div className="relative z-10 p-6 h-full flex flex-col justify-center lg:justify-start lg:ml-[74px]">
            <img className="w-[100px] h-[48px] sm:w-[134px] sm:h-[65px] mb-6 lg:mb-0" alt="Logo" src="/images/logo.svg" />

            <div className="lg:mt-[306px] font-['Lato',Helvetica] font-extrabold text-white text-[24px] sm:text-[32px] lg:text-[40px] tracking-[1.20px] sm:tracking-[1.40px] lg:tracking-[1.60px] leading-[28px] sm:leading-[38px] lg:leading-[47px] mb-6 lg:mb-0">
              Project Greenspace, <br />
              Sleep and Mental Health
            </div>

            <div className="lg:mt-[87px] font-['Lato',Helvetica] font-semibold text-white text-base sm:text-lg lg:text-xl mb-4 lg:mb-0">
              Is your child in 1st, 2nd, or 3rd grade and would <br className="hidden sm:block" />
              you like to participate in a paid research study?
            </div>

            <div className="lg:mt-5 font-['Lato',Helvetica] font-semibold text-white text-base sm:text-lg lg:text-xl">
              If so, please complete the registration form.
            </div>
          </div>
        </div>

        {/* Right side with form */}
        <div className="flex-1 flex justify-center items-start p-6 sm:p-8 lg:pt-[59px] order-2 lg:order-2 bg-white">
          <div className="w-full max-w-[406px]">
            <h1 className="font-['Lato',Helvetica] font-bold text-[#6aa84f] text-[20px] sm:text-[22px] lg:text-[25px] mb-6 sm:mb-8 lg:mb-[38px] text-center lg:text-left">
              Registration Form
            </h1>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0 space-y-3 sm:space-y-4 lg:space-y-[14px]">
                <div className="relative">
                  <Input
                    className="h-[45px] sm:h-[47px] lg:h-[49px] rounded-[50px] border-2 border-[#aeda85] pl-[18px] sm:pl-[20px] lg:pl-[21px] font-['Lato',Helvetica] font-bold text-sm w-full"
                    placeholder="First Name"
                  />
                </div>

                <div className="relative">
                  <Input
                    className="h-[45px] sm:h-[47px] lg:h-[49px] rounded-[50px] border-2 border-[#aeda85] pl-[18px] sm:pl-[20px] lg:pl-[21px] font-['Lato',Helvetica] font-bold text-sm w-full"
                    placeholder="Last Name"
                  />
                </div>

                <div className="relative">
                  <Input
                    className="h-[45px] sm:h-[47px] lg:h-[49px] rounded-[50px] border-2 border-[#aeda85] pl-[18px] sm:pl-[20px] lg:pl-[21px] font-['Lato',Helvetica] font-bold text-sm w-full"
                    placeholder="Phone"
                  />
                </div>

                <div className="relative">
                  <Input
                    className="h-[45px] sm:h-[47px] lg:h-[49px] rounded-[50px] border-2 border-[#aeda85] pl-[18px] sm:pl-[20px] lg:pl-[21px] font-['Lato',Helvetica] font-bold text-sm w-full"
                    placeholder="Email"
                  />
                </div>

                <div className="relative">
                  <Select>
                    <SelectTrigger className="h-[45px] sm:h-[47px] lg:h-[49px] rounded-[50px] border-2 border-[#aeda85] pl-[18px] sm:pl-[20px] lg:pl-[21px] font-['Lato',Helvetica] font-bold text-sm text-[#949191] w-full">
                      <SelectValue placeholder="School Grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st">1st Grade</SelectItem>
                      <SelectItem value="2nd">2nd Grade</SelectItem>
                      <SelectItem value="3rd">3rd Grade</SelectItem>
                      <SelectItem value="4th">4th Grade</SelectItem>
                      <SelectItem value="5th">5th Grade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <Textarea
                    className="min-h-[140px] sm:min-h-[160px] lg:min-h-[174px] rounded-[30px] border-2 border-[#aeda85] pl-[18px] sm:pl-[20px] lg:pl-[21px] pt-[12px] font-['Lato',Helvetica] font-bold text-sm resize-none w-full"
                    placeholder="Comments"
                  />
                </div>

                <Button className="w-full h-[50px] sm:h-[54px] lg:h-[57px] rounded-[50px] bg-[#6aa84f] hover:bg-[#5a9341] font-['Lato',Helvetica] font-extrabold text-lg sm:text-xl transition-colors duration-200">
                  Submit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};