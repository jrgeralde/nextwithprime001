//components/header.tsx
"use client";

import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { MenuItem } from 'primereact/menuitem';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MenuBar() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const items: MenuItem[] = [
    { label: 'Home', command: () => router.push('/dashboard'), className: 'mx-3 px-3 py-2 rounded text-white hover:bg-orange-500 font-serif' },
    { label: 'About', command: () => router.push('/dashboard/about'), className: 'mx-3 px-3 py-2 rounded text-white hover:bg-orange-500 font-serif' },
    { label: 'Contact', command: () => router.push('/dashboard/contact'), className: 'mx-3 px-3 py-2 text-white rounded hover:bg-orange-500 font-serif' },
    { label: 'Contact 2', command: () => router.push('/dashboard/contact2'), className: 'mx-3 px-3 py-2 rounded text-white hover:bg-orange-500 font-serif' },
    { label: 'Contact 3', command: () => router.push('/dashboard/contact3'), className: 'mx-3 px-3 py-2 rounded text-white hover:bg-orange-500 font-serif' },
  ];

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="flex lg:hidden items-center justify-end p-3 bg-white text-black sticky top-0 z-50 shadow-xl">
        <Button
          icon="pi pi-bars"
          className="p-button-text text-white"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* DESKTOP MENUBAR */}
      <div className="hidden lg:block sticky top-0 z-50 bg-gray-700 shadow-xl">
        <Menubar
          model={items}
          className="bg-transparent border-none p-3"
        />
      </div>

      {/* MOBILE SIDEBAR */}
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        className="w-64 bg-gray-700/90 border-l border-gray-600"
        maskClassName="bg-black/50 backdrop-blur-sm"
      >
        <Menu
          model={items.map(item => ({
            ...item,
            command: () => {
              item.command?.({ item, originalEvent: undefined as any }); // Execute navigation
              setVisible(false); // Close sidebar
            },
            styleClass: 'my-2 px-3 py-2 rounded hover:bg-orange-500',
          }))}
          className="border-none bg-transparent"
        />
      </Sidebar>
    </>
  );
}
