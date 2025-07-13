"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { User, Mail, MessageSquare } from "lucide-react";

import { useModalStore } from "@/stores/modalStore";
import confetti from "canvas-confetti";
import { toast } from "@/hooks/use-toast";

import { Description } from "@radix-ui/react-dialog";

export default function ContactFormModal() {
  const { isOpen, closeModal } = useModalStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        closeModal();
        toast({
          description: result.message,
        });

        triggerConfetti();

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast({
          variant: "destructive",
          title: result.message,
        });
      }
    } catch (error) {
      console.error("Something went wrong" + error);
    }
  };

  // Confetti animation function
  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-md rounded-2xl shadow-2xl p-6 transition-all duration-300 ease-in-out">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-left">
            Contact Me
          </DialogTitle>
          <Description className="text-sm text-muted-foreground pl-1">
            I typically respond quickly, so feel free to reach out anytime!
          </Description>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="relative">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full text-sm"
              placeholder="Name"
              required
            />
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm"
              size={18}
            />
          </div>
          <div className="relative">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full text-sm"
              placeholder="Email"
              required
            />
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
          </div>
          <div className="relative">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full text-sm"
              placeholder="Type your message"
              rows={4}
              required
            />
            <MessageSquare
              className="absolute left-3 top-3 text-muted-foreground"
              size={18}
            />
          </div>

          <div className="flex justify-between">
            <DialogClose asChild>
              <Button variant={"outline"} className="">
                Close
              </Button>
            </DialogClose>

            <Button type="submit" className="">
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
