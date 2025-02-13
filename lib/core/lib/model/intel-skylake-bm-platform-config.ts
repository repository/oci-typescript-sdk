/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The platform configuration of a bare metal instance that uses the Intel Skylake platform.
 *
 */
export interface IntelSkylakeBmPlatformConfig extends model.PlatformConfig {
  "type": string;
}

export namespace IntelSkylakeBmPlatformConfig {
  export function getJsonObj(obj: IntelSkylakeBmPlatformConfig, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PlatformConfig.getJsonObj(obj) as IntelSkylakeBmPlatformConfig)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "INTEL_SKYLAKE_BM";
  export function getDeserializedJsonObj(
    obj: IntelSkylakeBmPlatformConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PlatformConfig.getDeserializedJsonObj(obj) as IntelSkylakeBmPlatformConfig)),
      ...{}
    };

    return jsonObj;
  }
}
