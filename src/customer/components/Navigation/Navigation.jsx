import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition ,TransitionChild, DialogPanel ,
   TabGroup, TabList, TabPanel, TabPanels, PopoverGroup,PopoverButton} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import AuthModal from "../../Auth/AuthModal";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deepPurple } from "@mui/material/colors";
import { getUser, logout } from "../../../State/Auth/Action";
import logo from './logo.png';


const navigation = {
  categories: [
    {
      id: "categories",
      name: "Categories",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/w/j/h/aqua-12-l-ro-uv-uf-tds-acitive-copper-zinc-booster-water-original-imagp6qktm8ghfhz.jpeg?q=70",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/garden-sprayer/s/r/d/1-automatic-360-rotating-adjustable-garden-sprinkler-ada-original-imagnunqhcbsutky.jpeg?q=70",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "filters",
          name: "Filters and Purifiers",
          items: [
            { name: "Filter 1", href: "/tops" },
            { name: "Filter 2", href: "#" },
            { name: "Filter 3", href: "#" },
            { name: "Filter 4", href: "#" },
            { name: "Filter 5", href: "#" },
            { name: "Filter 6", href: "#" },
            { name: "Filter 7", href: "#" },
            { name: "Filter 8", href: "#" },
            { name: "Filter 9", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Water Saving Devices",
          items: [
            { name: "Showerheads", href: "#" },
            { name: "Faucets", href: "#" },
            { name: "Dual-flush Toilets", href: "#" },
            { name: "Irrigation system 1", href: "#" },
            { name: "Irrigation system 2", href: "#" },
            { name: "Irrigation system 3", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Brand 1", href: "#" },
            { name: "Brand 2", href: "#" },
            { name: "Brand 3", href: "#" },
            { name: "Brand 4", href: "#" },
            { name: "Brand 5", href: "#" },
          ],
        },
      ],
    },
    {
      id: "about us",
      name: "About Us",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/bottle/3/h/q/700-700-ml-pu-insulated-4-hours-warm-and-cold-school-kids-water-original-imagsggfmhhchhwm.jpeg?q=70",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/all-purpose-cleaner/f/k/x/automatic-flush-toilet-bowl-cleaner-tablets-bathroom-toilet-tank-original-imagrs49ymhgsw3k.jpeg?q=70",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of s and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "filters",
          name: "Filters and Purifiers",
          items: [
            { name: "Filter 1", href: "/tops" },
            { name: "Filter 2", href: "#" },
            { name: "Filter 3", href: "#" },
            { name: "Filter 4", href: "#" },
            { name: "Filter 5", href: "#" },
            { name: "Filter 6", href: "#" },
            { name: "Filter 7", href: "#" },
            { name: "Filter 8", href: "#" },
            { name: "Filter 9", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Water Saving Devices",
          items: [
            { name: "Showerheads", href: "#" },
            { name: "Faucets", href: "#" },
            { name: "Dual-flush Toilets", href: "#" },
            { name: "Irrigation system 1", href: "#" },
            { name: "Irrigation system 2", href: "#" },
            { name: "Irrigation system 3", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Brand 1", href: "#" },
            { name: "Brand 2", href: "#" },
            { name: "Brand 3", href: "#" },
            { name: "Brand 4", href: "#" },
            { name: "Brand 5", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Refer and Earn", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
};



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const {auth}=useSelector(store=>store);
  const dispatch=useDispatch();
  const location=useLocation(); 

  const handleOpen=()=>{
    setOpenAuthModal(true);
  };
  const handleClose=()=>{
    setOpenAuthModal(false);
  };

  const handleUserClick = (event) => {
    console.log("avatar is clicked");
    setAnchorEl(event.currentTarget); 
  };

  const handleCloseUserMenu = () => {
    console.log("avatar menu is closed");
    setAnchorEl(null); 
  };

  const handleCategoryClick=(category,section,item,close) => {
    console.log("Category: ", category);  // Debug statement
  console.log("Section: ", section);    // Debug statement
  console.log("Item: ", item);          // Debug statement
    // console.log('handleCategoryClick includes ',{category},{section}, {item} )
    navigate(`/${category.id}/${section.id}/${item.name}`);
    
    close();
  };
  // const handleCategoryClick = (category, section, item, close) => {
  //   console.log("Category: ", category);  // Debug statement
  //   console.log("Section: ", section);    // Debug statement
  //   console.log("Item: ", item);          // Debug statement
  
  //   if (category && category.id && section && section.id && item && item.name) {
  //     // Construct the URL path
  //     const path = `/${category.id}/${section.id}/${item.name}`;
  //     console.log("Navigating to: ", path);  // Debug statement
  //     navigate(path);
  
  //     // If a close function is provided, call it
  //     if (typeof close === 'function') {
  //       close();
  //     }
  //   } else {
  //     console.warn("Category ID, Section ID, or Item Name is undefined");  // Debug statement for undefined category, section, or item
  //   }
  // };
  
  useEffect(()=>{
    if(jwt){
        dispatch(getUser(jwt))
    }
  },[jwt,auth.jwt])

  useEffect(()=>{

    if(auth.user)
    {
      handleClose();
    }
    if(location.pathname === "/login" || location.pathname=== "/register")
    {
      navigate(-1)
    }

  },[auth.user])

  const handleLogout=()=>{
    dispatch(logout())
    handleCloseUserMenu()
  }
  return (
    <div className="bg-white pb-10">
      {/* Mobile menu */}
      <Transition show={open} as={Fragment}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <TabGroup as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <TabList className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                  <TabPanels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <TabPanel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header className="relative bg-white">
        {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p> */}

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-16 w-auto "
                    src={logo}
                    alt="ShopWithZosh"
                    onClick={()=>{
                      navigate("/")
                    }}
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <PopoverButton
                              className={classNames(
                                open
                                  ? "border-indigo-800 text-indigo-800"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </PopoverButton>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                 <p
                                                   onClick={()=>
                                                  handleCategoryClick(
                                                    category,
                                                    section,
                                                    item,
                                                    close
                                                   )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800"
                                                  >

                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>
                    {/* don't change from here */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {/* <a
                    href="/"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a> */}
                  {
                    auth.user?.firstName ? (
                      <div>
                        <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls = {open ? "basic-menu" : undefined}
                        aria-haspopup = "true"
                        aria-expanded = {open ? "true" : undefined} 
                        sx={{
                          bgcolor: deepPurple[500],
                          color:"white",
                          cursor:"pointer"
                        }}
                        >
                          {auth.user?.firstName[0].toUpperCase()}
                        </Avatar>  
                        <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby":"basic-button",
                        }}
                        >
                          <MenuItem onClick={handleCloseUserMenu}>
                            Profile
                          </MenuItem>
                          <MenuItem onClick={()=>navigate("/account/order")}>
                            My Orders
                          </MenuItem>
                          <MenuItem onClick={handleLogout} >Logout</MenuItem>
                        </Menu>
                      </div>
                    ) : (
                      <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800">
                          Signin
                      </Button>
                    )
                  }
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

                </div>


                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal  handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}
