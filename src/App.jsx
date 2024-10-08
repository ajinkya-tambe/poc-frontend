import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios"; // Import axios

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    prn: "",
    phone: "",
    gender: "male",
    department: "",
    resumeLink: "",
    linkedin: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    axios.post('https://poc-backend-spring-fdcuhxb5ghandgcd.canadacentral-01.azurewebsites.net/poc/student', formData)
      .then(result => {
        console.log(result);
        alert("Data uploaded successfully!");
      })
      .catch(error => {
        console.log(error);
        alert("Something went wrong!");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMGYwZjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBmaWxsPSIjZTBlMGUwIiBkPSJNMzAgMzBoMzB2MzBIMzB6Ii8+PC9nPjwvc3ZnPg==')]">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Registration Form</h2>
          <p className="mt-2 text-sm text-gray-600">Please fill out all the required fields</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </Label>
                <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </Label>
              <Textarea id="address" name="address" value={formData.address} onChange={handleChange} rows={3} className="mt-1" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="prn" className="block text-sm font-medium text-gray-700">
                  PRN
                </Label>
                <Input id="prn" name="prn" type="text" value={formData.prn} onChange={handleChange} required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="mt-1" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label className="block text-sm font-medium text-gray-700">Gender</Label>
                <RadioGroup value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })} className="mt-2 flex space-x-4">
                  <div className="flex items-center">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="ml-2">Male</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="ml-2">Female</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="ml-2">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="department" className="block text-sm font-medium text-gray-700">
                  Department
                </Label>
                <Select name="department" value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })}>
                  <SelectTrigger className="mt-1 bg-white">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="ee">Electrical Engineering</SelectItem>
                    <SelectItem value="me">Mechanical Engineering</SelectItem>
                    <SelectItem value="ce">Civil Engineering</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700">
                Resume Link
              </Label>
              <Input id="resumeLink" name="resumeLink" type="url" value={formData.resumeLink} onChange={handleChange} placeholder="https://www.example.com/resume.pdf" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                LinkedIn Profile
              </Label>
              <Input id="linkedin" name="linkedin" type="url" value={formData.linkedin} onChange={handleChange} placeholder="https://www.linkedin.com/in/yourprofile" className="mt-1" />
            </div>
          </div>
          <div className="mt-8">
            <Button type="submit" className="w-full bg-black-100 text-black py-2 px-4 rounded-md">
              Submit Registration
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
