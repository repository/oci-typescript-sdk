/**
 *
 *
 * OpenAPI spec version: 20170907
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/email/UpdateDkim.ts.html |here} to see how to use UpdateDkimRequest.
 */
export interface UpdateDkimRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of this DKIM.
   */
  "dkimId": string;
  /**
   * The new DKIM attributes to apply.
   */
  "updateDkimDetails": model.UpdateDkimDetails;
  /**
   * Used for optimistic concurrency control. In the update or delete call for a resource, set the `if-match`
   * parameter to the value of the etag from a previous get, create, or update response for that resource.  The resource
   * will be updated or deleted only if the etag you provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * The request ID for tracing from the system
   */
  "opcRequestId"?: string;
}
