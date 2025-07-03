import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: ""
    }
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "MESSAGE SENT",
        description: "YOUR MESSAGE HAS BEEN SUBMITTED SUCCESSFULLY",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "SUBMISSION FAILED",
        description: error.message || "FAILED TO SUBMIT CONTACT FORM",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contact" className="min-h-screen bg-[var(--brutal-beige)]">
      <div className="brutal-border border-t-0 bg-[var(--brutal-white)] p-12">
        <div className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-6 mb-12 inline-block">
          <h2 className="helvetica text-4xl font-black uppercase tracking-wider">CONTACT</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="brutal-border bg-[var(--brutal-dark)] text-[var(--brutal-white)] p-3 mb-6 inline-block">
              <h3 className="courier text-lg uppercase font-bold tracking-wider">GET IN TOUCH</h3>
            </div>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block courier text-sm uppercase font-bold tracking-wider mb-2">NAME</label>
                <input 
                  type="text"
                  {...form.register("name")}
                  className="form-input"
                  placeholder="YOUR NAME"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label className="block courier text-sm uppercase font-bold tracking-wider mb-2">EMAIL</label>
                <input 
                  type="email"
                  {...form.register("email")}
                  className="form-input"
                  placeholder="YOUR EMAIL"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block courier text-sm uppercase font-bold tracking-wider mb-2">PROJECT TYPE</label>
                <select 
                  {...form.register("projectType")}
                  className="form-select"
                >
                  <option value="">SELECT PROJECT TYPE</option>
                  <option value="residential">RESIDENTIAL</option>
                  <option value="commercial">COMMERCIAL</option>
                  <option value="institutional">INSTITUTIONAL</option>
                  <option value="industrial">INDUSTRIAL</option>
                </select>
                {form.formState.errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.projectType.message}</p>
                )}
              </div>
              
              <div>
                <label className="block courier text-sm uppercase font-bold tracking-wider mb-2">MESSAGE</label>
                <textarea 
                  rows={6}
                  {...form.register("message")}
                  className="form-textarea"
                  placeholder="DESCRIBE YOUR PROJECT"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="brutal-button p-4 courier text-sm uppercase font-bold tracking-widest"
                disabled={submitContactMutation.isPending}
              >
                {submitContactMutation.isPending ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
          
          {/* Contact Details */}
          <div>
            <div className="brutal-border bg-[var(--brutal-dark)] text-[var(--brutal-white)] p-3 mb-6 inline-block">
              <h3 className="courier text-lg uppercase font-bold tracking-wider">STUDIO DETAILS</h3>
            </div>
            
            <div className="space-y-6">
              <div className="brutal-border bg-[var(--brutal-grey)] text-[var(--brutal-white)] p-6">
                <h4 className="courier text-sm uppercase font-bold tracking-wider mb-2">ADDRESS</h4>
                <p className="helvetica text-base uppercase tracking-wide">
                  123 CONCRETE STREET<br />
                  BRUTALIST DISTRICT<br />
                  LONDON EC1A 1BB
                </p>
              </div>
              
              <div className="brutal-border bg-[var(--brutal-grey)] text-[var(--brutal-white)] p-6">
                <h4 className="courier text-sm uppercase font-bold tracking-wider mb-2">PHONE</h4>
                <p className="helvetica text-base uppercase tracking-wide">+44 20 7946 0958</p>
              </div>
              
              <div className="brutal-border bg-[var(--brutal-grey)] text-[var(--brutal-white)] p-6">
                <h4 className="courier text-sm uppercase font-bold tracking-wider mb-2">EMAIL</h4>
                <p className="helvetica text-base uppercase tracking-wide">MARCUS@CONCRETESTUDIO.COM</p>
              </div>
              
              <div className="brutal-border bg-[var(--brutal-black)] text-[var(--brutal-white)] p-6">
                <h4 className="courier text-sm uppercase font-bold tracking-wider mb-4">STUDIO HOURS</h4>
                <div className="space-y-2 helvetica text-sm uppercase tracking-wide">
                  <p>MONDAY - FRIDAY: 09:00 - 18:00</p>
                  <p>SATURDAY: 10:00 - 14:00</p>
                  <p>SUNDAY: CLOSED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
