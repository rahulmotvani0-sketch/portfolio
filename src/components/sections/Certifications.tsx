/* eslint-disable @next/next/no-img-element */
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Award, Trophy } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Certifications & Achievements" 
          subtitle="Continuous learning and validation of security and infrastructure expertise."
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-slate-100">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="GCP" className="h-5 w-5 opacity-80" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Google Cloud Certificate Course</h4>
                    <p className="text-sm text-slate-400 mb-2">Coursera</p>
                    <Badge variant="outline" className="text-xs">Cloud Infrastructure</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-400 font-bold">
                    ICSI
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Certified Network Security Specialist</h4>
                    <p className="text-sm text-slate-400 mb-2">ICSI (U.K.)</p>
                    <Badge variant="outline" className="text-xs">Network Security</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" alt="Cisco" className="h-5 w-5 opacity-80" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">Introduction to Cyber Security & Networking Basics</h4>
                    <p className="text-sm text-slate-400 mb-2">Cisco</p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">Cybersecurity</Badge>
                      <Badge variant="outline" className="text-xs">Networking</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-slate-100">Achievements & Education</h3>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-slate-900/50 border-cyan-500/30 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-cyan-500/10 blur-2xl rounded-full"></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-slate-100">TryHackMe — Top 3%</h4>
                    <Badge variant="success">Active Target</Badge>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">
                    Demonstrated practical cybersecurity experience, penetrating testing fundamentals, and defense-in-depth strategies through hands-on lab environments.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="bg-slate-950">Pre-Security Path</Badge>
                    <Badge variant="outline" className="bg-slate-950">Cyber Security Path</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-slate-100 mb-1">M.Sc. Information Technology (IMS)</h4>
                  <p className="text-cyan-400 text-sm mb-3">Ganpat University • Jun 2022</p>
                  <p className="text-slate-400 text-sm flex items-center">
                    <span className="font-mono bg-slate-950 px-2 py-1 rounded mr-2 border border-slate-800">CGPA: 9.8</span>
                    Academic Excellence
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-slate-100 mb-1">B.Sc. Information Technology (IMS)</h4>
                  <p className="text-cyan-400 text-sm mb-3">Ganpat University • Aug 2020</p>
                  <p className="text-slate-400 text-sm flex items-center">
                    <span className="font-mono bg-slate-950 px-2 py-1 rounded mr-2 border border-slate-800">CGPA: 8.6</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
