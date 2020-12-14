export default function Alert({ success, message, handleClose }) {
  return (
    <div
      class={`text-sm font-semibold text-center text-white px-3 py-2 border-0 rounded relative mb-4 ${
        success ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <span class="inline-block align-middle mr-8">{message}</span>
    </div>
  );
}
