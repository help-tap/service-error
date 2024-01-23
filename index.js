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
      code: this.code,
      stack: this.stack
    });

  }

  toJSON() {

    return ({
      metadata: this.metadata,
      code: this.code,
      stack: this.stack
    });

  }

  static toJSON(exception, message, startupId) {

    if (exception instanceof ServiceError) {

      return {
        ...exception.toJSON(),
        message,
        startupId
      };

    }

    const data = {};
    const ownPropertyNames = Object.getOwnPropertyNames(exception);

    for (let propertyName of ownPropertyNames) {

      data[propertyName] = exception[propertyName];

    }

    if (data.message !== void 0) {
      data.errorMessage = data.message;
    }

    return { ...data, startupId, message };

  }

}

module.exports = ServiceError;
