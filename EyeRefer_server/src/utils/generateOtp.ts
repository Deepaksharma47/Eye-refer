export function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}
