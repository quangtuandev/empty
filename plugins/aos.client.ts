import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      duration: 800, // Thời gian hiệu ứng (ms)
      once: true, // Chỉ chạy hiệu ứng 1 lần
    });
  });

  nuxtApp.hook('page:finish', () => {
    AOS.refresh(); // Cập nhật lại AOS khi chuyển trang
  });
});
