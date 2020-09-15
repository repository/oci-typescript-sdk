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
 * The information to be updated in attached Target DetectorRecipe
 */
export interface UpdateTargetDetectorRecipe {
  /**
   * Identifier for DetectorRecipe.
   */
  "targetDetectorRecipeId": string;
  /**
   * Updates to be applied to Detector Rule associated with the target
   */
  "detectorRules": Array<model.UpdateTargetRecipeDetectorRuleDetails>;
}

export namespace UpdateTargetDetectorRecipe {
  export function getJsonObj(obj: UpdateTargetDetectorRecipe): object {
    const jsonObj = {
      ...obj,
      ...{
        "detectorRules": obj.detectorRules
          ? obj.detectorRules.map(item => {
              return model.UpdateTargetRecipeDetectorRuleDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
