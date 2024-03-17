'use client';
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { saveAs } from 'file-saver';
export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleDownload = () => {
        const resumeUrl = '../assets/resume.pdf';
        // Fetch the PDF file
        fetch(resumeUrl)
          .then(response => response.blob())
          .then(blob => {
            // Save the PDF file
            saveAs(blob, 'resume.pdf');
          })
          .catch(error => {
            console.error('Error downloading file:', error);
          });
    };
    

    const menuItems = [
        "About me",
        "Projects/Skills",
        "Contact me",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">Ayush Sahay</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About me
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page">
                        Projects/Skills
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact me
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button onClick={handleDownload} color="primary" variant="flat">
                        Download Resume
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
