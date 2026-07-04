const requests = new Map();

export function rateLimit(ip) {
  const now = Date.now();

  const windowMs = 15 * 60 * 1000;
  const maxRequests = 5;

  const record = requests.get(ip);

  if (!record) {
    requests.set(ip, {
      count: 1,
      startTime: now,
    });

    return true;
  }

  if (now - record.startTime > windowMs) {
    requests.set(ip, {
      count: 1,
      startTime: now,
    });

    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;

  return true;
}