import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: "30s",
  thresholds: {
    http_req_duration: ["p(99)<1500"],
  },
};

export default function () {
  http.get('https://www.polinema.ac.id/');
  sleep(1);
}
