import { Service } from 'node-windows';

// Create a new service object
let svc: Service = new Service({
  name: 'cctv',
  description: 'cctv',
  script: 'C:\\dvlp\\cctv\\src\main.ts'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
  svc.start();
});

svc.install();
