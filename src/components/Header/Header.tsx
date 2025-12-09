"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from "react-icons/fa";
import TicketModal from '../TicketModal/TicketModal';

const navLinks = [
    { id: 1, title: 'TEACHER REGISTRATION', path: "/teacherRegistration" },
    { id: 2, title: 'STUDENT REGISTRATION', path: "/studentRegistration" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const previousTouchAction = document.body.style.touchAction;

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = previousOverflow || '';
            document.body.style.touchAction = previousTouchAction || '';
        }

        return () => {
            document.body.style.overflow = previousOverflow || '';
            document.body.style.touchAction = previousTouchAction || '';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isMobileMenuOpen]);

    const mobileDrawerClasses = `fixed top-[70px] left-0 w-full bg-[#042f2e] shadow-[0_8px_16px_rgba(4,47,46,0.35)] z-50 flex flex-col px-4 py-4 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`;

    return (
        <header className="bg-[#042f2e] shadow-[0_2px_10px_rgba(4,47,46,0.25)] sticky top-0 z-[1000] w-full border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 h-[80px] flex items-center">
                    <div className="relative w-[50px] h-[50px] sm:w-[100px] sm:h-[65px] flex-shrink-0">
                        <Image
                            src="/logos/dreamFoundation_logo.png"
                            alt="Dream Foundation Logo"
                            fill
                            className="object-contain"
                        />
                </div>
            </div>
        </header>
    );
}

