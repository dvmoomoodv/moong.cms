import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "대시보드", href: "#", current: true },
  {
    name: "사용자관리",
    current: false,
    children: [
      { name: "사용자관리", href: "#" },
      { name: "사용자이력", href: "#" },
      { name: "권한그룹관리", href: "#" },
      { name: "권한관리", href: "#" },
      { name: "승인요청관리", href: "#" },
      { name: "권한상태조회", href: "#" },
    ],
  },
  {
    name: "공통관리",
    current: false,
    children: [
      { name: "코드관리", href: "#" },
      { name: "메뉴관리", href: "#" },
      { name: "메뉴별상태관리", href: "#" },
      { name: "문서그룹관리", href: "#" },
      { name: "문서관리", href: "#" },
      { name: "파일그룹관리", href: "#" },
    ],
  },
  {
    name: "예제",
    current: false,
    children: [
      { name: "레이아웃1", href: "/management/example/layout/template1" },
      { name: "레이아웃2", href: "/management/example/layout/template2" },
      { name: "레이아웃3", href: "/management/example/layout/template3" },
      { name: "문서생성", href: "#" },
      { name: "팝업", href: "#" },
      { name: "레이어관리", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
  { name: "도움말", href: "#", current: false },
  { name: "개인정보처리방침", href: "#", current: false },
  { name: "이용약관", href: "#", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function lnb() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
        <span className="font-bold ml-3">Moong.CMS</span>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-gray-50" : "hover:bg-gray-50",
                        "block rounded-md py-2 pl-10 pr-2 text-sm font-semibold leading-6 text-gray-700"
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current ? "bg-gray-50" : "hover:bg-gray-50",
                          "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700"
                        )}
                      >
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                        />
                        {item.name}
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            <DisclosureButton
                              as="a"
                              href={subItem.href}
                              className={classNames(
                                subItem.current
                                  ? "bg-gray-50"
                                  : "hover:bg-gray-50",
                                "block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700"
                              )}
                            >
                              {subItem.name}
                            </DisclosureButton>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-8 w-8 rounded-full bg-gray-50"
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
