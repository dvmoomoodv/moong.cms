import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  LinkIcon,
  HomeIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function GnbHeader() {
  return (
    <div className="content-around lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb" className="hidden md:flex">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex ">
                <a
                  href="#"
                  className="text-xs font-medium text-gray-500 hover:text-gray-700"
                >
                  <HomeIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0"
                  />
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                />
                <a
                  href="#"
                  className="ml-4 text-xs font-medium text-gray-500 hover:text-gray-700"
                >
                  사용자관리
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div className="relative mt-1 flex flex-row gap-3">
          <h2 className=" text-md font-bold leading-7 text-gray-900 sm:truncate sm:text-lg sm:tracking-tight">
            사용자정보관리
          </h2>
          <div className="mt-1 xl:flex hidden flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className=" flex items-center text-xs text-gray-500">
              <BriefcaseIcon
                aria-hidden="true"
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              />
              Full-time
            </div>
            <div className=" flex items-center text-xs text-gray-500">
              <MapPinIcon
                aria-hidden="true"
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              />
              Remote
            </div>
            <div className=" flex items-center text-xs text-gray-500">
              <CurrencyDollarIcon
                aria-hidden="true"
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              />
              $120k &ndash; $140k
            </div>
            <div className=" flex items-center text-xs text-gray-500">
              <CalendarIcon
                aria-hidden="true"
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
              />
              Closing on January 9, 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
