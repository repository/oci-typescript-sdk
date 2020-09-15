/**
 * Oracle Integration API
 * Oracle Integration API.
 * OpenAPI spec version: 20190131
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
 * Description of Integration Instance.
 */
export interface IntegrationInstance {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Integration Instance Identifier, can be renamed.
   */
  "displayName": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * Standard or Enterprise type
   */
  "integrationInstanceType": IntegrationInstance.IntegrationInstanceType;
  /**
   * The time the the IntegrationInstance was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the IntegrationInstance was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the integration instance.
   */
  "lifecycleState"?: IntegrationInstance.LifecycleState;
  /**
   * An message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "stateMessage"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name,
   * type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to
   * namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Bring your own license.
   */
  "isByol": boolean;
  /**
   * The Integration Instance URL.
   */
  "instanceUrl": string;
  /**
   * The number of configured message packs (if any)
   */
  "messagePacks": number;
  /**
   * The file server is enabled or not.
   */
  "isFileServerEnabled"?: boolean;
  /**
   * The entitlement used for billing purposes.
   */
  "consumptionModel"?: IntegrationInstance.ConsumptionModel;
}

export namespace IntegrationInstance {
  export enum IntegrationInstanceType {
    Standard = "STANDARD",
    Enterprise = "ENTERPRISE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ConsumptionModel {
    Ucm = "UCM",
    Gov = "GOV",
    Oic4Saas = "OIC4SAAS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IntegrationInstance): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
