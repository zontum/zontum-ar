
import { useEffect, useState } from 'react';
import { Activity, Zap, Shield, Server, Cpu, Globe } from 'lucide-react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto space-y-12">
      {/* Background Pattern Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 space-y-12">
        {/* Header */}
        <header className="flex items-center gap-4 opacity-0 animate-fade-in" style={{
          animationDelay: '0.2s',
          animationFillMode: 'forwards'
        }}>
          <img src="https://i.ibb.co/5bJ4K5j/DARK.png" alt="Darksun Logo" className="w-12 h-12" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Darksun Node Operations</h1>
            <p className="text-[var(--muted)]">Professional Arweave Network Node Operator since 2024</p>
          </div>
        </header>

        {/* Gateway Section */}
        <div className="glass p-8 flex justify-between items-center opacity-0 animate-fade-in" style={{
          animationDelay: '0.4s',
          animationFillMode: 'forwards'
        }}>
          <div className="flex items-center gap-6">
            <img src="https://i.ibb.co/Z6sHGMwK/AR.png" alt="Chain Logo" className="w-10 h-10" />
            <div>
              <p className="text-[var(--muted)] text-sm font-medium">Gateway Name</p>
              <h2 className="text-2xl font-semibold text-[#00DC82]">Darksun Gateway</h2>
            </div>
          </div>
          <a 
            href="https://network-portal.app/gateways#/gateways/99cN-yl_Ytpn-_vOOZrF39O3YST9Qe5OP9SZHP_JN7Y"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00DC82] to-[#00DC82]/90 text-black font-medium hover:translate-y-[-1px] hover:shadow-lg transition-all duration-300"
          >
            Stake Now
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="metric-card opacity-0 animate-fade-in" style={{
            animationDelay: '0.6s',
            animationFillMode: 'forwards'
          }}>
            <div className="flex items-center gap-3">
              <Activity className="text-[#00DC82] w-5 h-5" />
              <span className="text-[var(--muted)] font-medium">Uptime</span>
            </div>
            <div>
              <span className="text-3xl font-bold">99.99%</span>
              <p className="text-sm text-[var(--muted)]">Annual availability</p>
            </div>
          </div>

          <div className="metric-card opacity-0 animate-fade-in" style={{
            animationDelay: '0.8s',
            animationFillMode: 'forwards'
          }}>
            <div className="flex items-center gap-3">
              <Zap className="text-[#3B82F6] w-5 h-5" />
              <span className="text-[var(--muted)] font-medium">Network Speed</span>
            </div>
            <div>
              <span className="text-3xl font-bold">10 Gbps</span>
              <p className="text-sm text-[var(--muted)]">Dedicated connection</p>
            </div>
          </div>

          <div className="metric-card opacity-0 animate-fade-in" style={{
            animationDelay: '1s',
            animationFillMode: 'forwards'
          }}>
            <div className="flex items-center gap-3">
              <Shield className="text-purple-400 w-5 h-5" />
              <span className="text-[var(--muted)] font-medium">Security Score</span>
            </div>
            <div>
              <span className="text-3xl font-bold">A+</span>
              <p className="text-sm text-[var(--muted)]">Security rating</p>
            </div>
          </div>
        </div>

        {/* Infrastructure & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass p-8 lg:col-span-2 space-y-8 opacity-0 animate-fade-in" style={{
            animationDelay: '1.2s',
            animationFillMode: 'forwards'
          }}>
            <h3 className="text-xl font-semibold">Infrastructure Overview</h3>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <Server className="text-[var(--muted)] w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Enterprise Hardware</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">Running on enterprise-grade servers with redundant power supplies, ECC memory, and RAID storage configurations.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Cpu className="text-[var(--muted)] w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Processing Power</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">Dual AMD EPYC processors with 128 cores, 512GB ECC RAM, and NVMe SSD storage arrays.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Globe className="text-[var(--muted)] w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Global Distribution</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">Strategically located in Tier-4 data centers with direct connections to major Internet exchanges.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass p-6 opacity-0 animate-fade-in" style={{
              animationDelay: '1.4s',
              animationFillMode: 'forwards'
            }}>
              <h3 className="text-lg font-semibold mb-4">Node Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[var(--muted)]">Node Version</span>
                  <span className="font-medium">27</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--muted)]">Location</span>
                  <span className="font-medium">Frankfurt, DE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--muted)]">Operating Since</span>
                  <span className="font-medium">January 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--muted)]">Network Rank</span>
                  <span className="font-medium">#1</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 opacity-0 animate-fade-in" style={{
              animationDelay: '1.6s',
              animationFillMode: 'forwards'
            }}>
              <h3 className="text-lg font-semibold mb-6">Performance Metrics</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[var(--muted)]">Block Propagation</span>
                    <span className="font-medium">{loaded ? '99.95%' : '0%'}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-value" style={{ width: loaded ? '99.95%' : '0%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[var(--muted)]">Storage Reliability</span>
                    <span className="font-medium">{loaded ? '99.99%' : '0%'}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-value" style={{ width: loaded ? '99.99%' : '0%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[var(--muted)]">Network Latency</span>
                    <span className="font-medium">{loaded ? '95ms' : '0ms'}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-value" style={{ width: loaded ? '95%' : '0%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
