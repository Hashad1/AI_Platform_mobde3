"use client";

import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface CreateAssistantDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateAssistantDialog({ open, onOpenChange }: CreateAssistantDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
  });
  const { toast } = useToast();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "تم إنشاء المساعد بنجاح",
        description: "يمكنك الآن البدء في استخدام المساعد الجديد",
      });
      
      onOpenChange(false);
      setFormData({ name: "", type: "", description: "" });
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "لم نتمكن من إنشاء المساعد. الرجاء المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [onOpenChange, toast]);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>إنشاء مساعد جديد</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">اسم المساعد</Label>
              <Input
                id="name"
                placeholder="أدخل اسم المساعد"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">نوع المساعد</Label>
              <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع المساعد" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">مبيعات</SelectItem>
                  <SelectItem value="education">تعليم</SelectItem>
                  <SelectItem value="support">دعم فني</SelectItem>
                  <SelectItem value="custom">مخصص</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">وصف المساعد</Label>
              <Textarea
                id="description"
                placeholder="أدخل وصفاً مختصراً للمساعد"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "جاري الإنشاء..." : "إنشاء المساعد"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}