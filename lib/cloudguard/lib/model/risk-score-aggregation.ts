/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Provides the dimensions and their corresponding risk score.
 */
export interface RiskScoreAggregation {
  /**
   * The key-value pairs of dimensions and their names.
   */
  "dimensionsMap": { [key: string]: string };
  /**
   * The risk score with given dimensions
   */
  "riskScore": number;
}

export namespace RiskScoreAggregation {
  export function getJsonObj(obj: RiskScoreAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
