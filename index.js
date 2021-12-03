class ServiceError extends Error {

  constructor(code, metadata, stack) {

    super(code, JSON.stringify(metadata));

    this.code = code;
    this.metadata = metadata;
    this.stack = stack || (new Error()).stack;

  }

  toString() {

    return JSON.stringify({
      metadata: this.metadata,
      code: this.code
    });

  }

}

module.exports = ServiceError;