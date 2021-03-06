import * as log from "loglevel";

const getHeader = () => `${new Date().toISOString()} | metrics`;
const format = (header, module, message) => `${header} | ${module} | ${message}`;

log.setDefaultLevel(log.levels.TRACE);

export const setVerboseLog = (shouldHaveVerboseLog) => {
  log.trace(format(getHeader(), "log", `set log level to ${shouldHaveVerboseLog ? "verbose" : "warn only"}`));
  log.setLevel(shouldHaveVerboseLog ? log.levels.TRACE : log.levels.WARN);
};

export const debug = (name, message) => {
  log.debug(format(getHeader(), name, message));
};

export const trace = (name, message) => {
  log.trace(format(getHeader(), name, message));
};

export const info = (name, message) => {
  log.info(format(getHeader(), name, message));
};

export const warn = (name, message) => {
  log.warn(format(getHeader(), name, message));
};

export const error = (name, message) => {
  log.error(format(getHeader(), name, message));
};
